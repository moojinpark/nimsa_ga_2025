from django.shortcuts import render

# Create your views here.

import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from .models import Donor

def home(request):
    return render(request, 'home.html')  # ✅ Make sure the file is named 'home.html'


@csrf_exempt
def flutterwave_webhook(request):
    if request.method == 'POST':
        payload = json.loads(request.body)

        status = payload.get('status')
        tx_ref = payload.get('tx_ref')
        amount = payload.get('amount')
        customer = payload.get('customer', {})
        email = customer.get('email')
        name = customer.get('name', 'Anonymous')

        # Avoid duplicate entries
        if Donor.objects.filter(tx_ref=tx_ref).exists():
            return JsonResponse({'message': 'Already recorded'}, status=200)

        if status == 'successful':
            Donor.objects.create(
                name=name,
                email=email,
                amount=amount,
                tx_ref=tx_ref,
                is_anonymous=(name == "Anonymous")
            )

            # Optional: Update leaderboard cache or other features
            print("Donation saved ✅")

        return JsonResponse({'status': 'received'}, status=200)

    return HttpResponse(status=405)

from django.db import models

# Create your models here.

class Donor(models.Model):
    name = models.CharField(max_length=100, default='Anonymous')
    email = models.EmailField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    tx_ref = models.CharField(max_length=100, unique=True)
    is_anonymous = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} – ₦{self.amount}"

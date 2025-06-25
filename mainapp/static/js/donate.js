document.getElementById("donationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;
  const anonymous = document.getElementById("anonymous").checked;

  const name = anonymous || nameInput.trim() === "" ? "Anonymous" : nameInput;

  if (!email || !amount || amount < 100) {
    alert("Please enter a valid email and an amount of ₦100 or more.");
    return;
  }

  FlutterwaveCheckout({
    public_key: "FLWPUBK-5604baaba5cf8de66a2ad7378d9d010c-X", // 🔁 Replace with your real public key
    tx_ref: "NIMSA_" + Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: email,
      name: name,
    },
    callback: function (response) {
      console.log(response);
      alert("✅ Payment complete! Reference: " + response.tx_ref);
      // 🔁 You can POST this to Django via fetch() or AJAX here
    },
    onclose: function () {
      console.log("Modal closed");
    },
    customizations: {
      title: "NiMSA General Meeting 2024",
      description: "Support for NiMSA's National Event",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Medical_symbol.svg/2048px-Medical_symbol.svg.png"
    }
  });
});

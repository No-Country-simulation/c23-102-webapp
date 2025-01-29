"""Crea payments Blueprint y create-checkout-session view."""
from flask import Blueprint, redirect
import stripe

payments_bp = Blueprint('payments', __name__, url_prefix='/payments')

stripe.api_key = 'sk_test_51QkX9wAnZzuVM90TT8EtJ0KkD1zCjTPvVMgY8vWUgGCws7sMi6OKaHPjzOlQpDBYbspqqWMNAoNdpR2qmNuihF7a00HLswtzWc'


@payments_bp.route('/create-checkout-session/<id>')
def create_checkout_session(id: str):
    """Crea una nueva pasarela de pago y redirje a ella."""
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': id,
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success.html',
            cancel_url=YOUR_DOMAIN + '/cancel.html',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session['url'], code=303)

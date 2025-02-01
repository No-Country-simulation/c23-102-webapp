"""Crea payments Blueprint y create-checkout-session view."""
from flask import Blueprint, abort, redirect, request
import stripe

payments_bp = Blueprint('payments', __name__, url_prefix='/payments')

stripe.api_key = 'sk_test_51QkX9wAnZzuVM90TT8EtJ0KkD1zCjTPvVMgY8vWUgGCws7sMi6OKaHPjzOlQpDBYbspqqWMNAoNdpR2qmNuihF7a00HLswtzWc'


@payments_bp.route('/create-checkout-session/<price_id>')
def create_checkout_session(price_id: str):
    """Crea una nueva pasarela de pago y redirje a ella."""
    data = request.get_json()
    success_url = data['success_url']
    cancel_url = data['cancel_url']

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': price_id,
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=success_url,
            cancel_url=cancel_url
        )
    except stripe.InvalidRequestError as error:
        error_message = str(error)
        abort(400, error_message)

    return redirect(checkout_session['url'], code=303)

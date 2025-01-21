"""Crea validador para formulario de registro."""
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields import EmailField
from wtforms.validators import DataRequired, Email


class RegisterForm(FlaskForm):
    """Valida los campos del formulario de registro."""
    name = StringField('name', validators=[
        DataRequired(message="El nombre es obligatorio."),
    ])
    lastname = StringField('lastname')
    email = EmailField('email', validators=[
        DataRequired(message="El correo es obligatorio."),
        Email(message="Debe ingresar un correo válido.")
    ])
    phone = StringField('phone')
    password = StringField('password', validators=[
        DataRequired(message="La contraseña es obligatoria."),
    ])

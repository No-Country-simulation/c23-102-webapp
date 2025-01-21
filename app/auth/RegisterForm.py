"""Crea validador para formulario de registro."""
from flask_wtf import FlaskForm
from wtforms import EmailField, PasswordField, StringField
from wtforms.validators import DataRequired


class RegisterForm(FlaskForm):
    """Valida los campos del formulario de registro."""
    name = StringField('name', validators=[DataRequired()])
    lastname = StringField('lastname')
    email = EmailField('email', validators=[DataRequired()])
    phone = StringField('phone', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])

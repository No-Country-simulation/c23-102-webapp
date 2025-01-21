"""Crea validador para formulario de registro."""
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class RegisterForm(FlaskForm):
    """Valida los campos del formulario de registro."""
    name = StringField('name', validators=[DataRequired()])

from django.core.exceptions import ValidationError


def validate_non_empty_string(value):
    # This could also be done in the Article.Form. Unsure if that would be
    # better.
    try:
        value += ''
        if len(value) == 0:
            raise ValidationError(
                ('%(value)s must be a non-empty string'),
                params={'value': value})
    except TypeError:
        raise ValidationError(
            ('%(value)s is not a string'),
            params={'value': value})

import json

from django import forms

from .models import Store


class OpeningTimesForm(forms.Widget):
    template_name = 'forms/opening_hours.html'
    html_template = """
    {{value}}
    {% if widget.value %}
        {% for value in widget.value %}
            {{ value }}
        {% endfor %}
    {% endif %}
    <textarea name="{{ widget.name }}"{% include "django/forms/widgets/attrs.html" %}>
    </textarea>"""

    def __init__(self, attrs=None):
        # Use slightly better defaults than HTML's 20x2 box
        default_attrs = {'cols': '40', 'rows': '10'}
        if attrs:
            default_attrs.update(attrs)
        super().__init__(default_attrs)

    def render(self, name, value, attrs=None, renderer=None):
        result = self.html_template % {
            'name': name,
            'value': json.dumps(value)
        }
        return result


class StoreForm(forms.ModelForm):
    openingTimes = forms.JSONField(widget=OpeningTimesForm)

    class Meta:
        model = Store
        fields = ('name', 'description_fr', 'description_en', 'website', 'storeStatus', 'appointmentOnly',
                  'openingTimes', 'profilePicture', 'categories', 'owner')

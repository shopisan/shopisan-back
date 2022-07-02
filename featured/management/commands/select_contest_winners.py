import pytz
import random

from django.core.management.base import BaseCommand
from datetime import datetime

from emails import send_mail
from featured.models import Code


class Command(BaseCommand):
    help = 'Add coordinates to stores'

    def handle(self, *args, **options):
        utc = pytz.UTC
        date = utc.localize(datetime.now())
        open_codes = Code.objects.filter(is_closed=False, is_active=True, to_date__lte=date)

        for open_code in open_codes:
            shuffled_users = list(open_code.users.all())
            random.shuffle(shuffled_users)
            random.shuffle(shuffled_users)

            number_winners = open_code.number_winners

            winners = shuffled_users[0:number_winners]

            body = ""
            for winner in winners:
                body += winner.username + " - " + winner.email + " - " + winner.profile.__str__() + "\n"

            send_mail(subject="Gagnants du concours " + open_code.code,
                      recipient_list=open_code.notify_emails.splitlines(),
                      template="emails/includes/common_email.html", variables={"body": body}, locale='fr')

            open_code.winners.set(winners)
            open_code.is_active = False
            open_code.save()

        self.stdout.write(self.style.SUCCESS("Yay"))

import csv
from django.http import HttpResponse
from django.contrib import admin
from .models import Contact

# Custom admin action to export data to CSV
def export_contacts_to_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="contacts.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'County', 'State', 'Address', 'Phone Number', 'Email'])

    for contact in queryset:
        writer.writerow([contact.name, contact.county, contact.state, contact.address, contact.phone_number, contact.email])

    return response

# Custom admin action to export data to TXT
def export_contacts_to_txt(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/plain')
    response['Content-Disposition'] = 'attachment; filename="contacts.txt"'

    # Iterate over the selected contacts and format the data
    for contact in queryset:
        response.write(f"Name: {contact.name}\n")
        response.write(f"County: {contact.county}\n")
        response.write(f"State: {contact.state}\n")
        response.write(f"Address: {contact.address}\n")
        response.write(f"Phone Number: {contact.phone_number}\n")
        response.write(f"Email: {contact.email}\n")
        response.write("\n" + "-"*20 + "\n")  # Separator for each contact

    return response

# Set short descriptions for the actions
export_contacts_to_csv.short_description = "Export Selected Contacts to CSV"
export_contacts_to_txt.short_description = "Export Selected Contacts to TXT"

# Customize the admin interface for the Contact model
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'county', 'state', 'phone_number', 'email')
    list_filter = ('state', 'county')
    search_fields = ('name', 'email')
    actions = [export_contacts_to_csv, export_contacts_to_txt]  # Add both custom actions

# Register the Contact model with the admin interface
admin.site.register(Contact, ContactAdmin)

from django.db import models

# Create your models here.

class Persona(models.Model):
    id = models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return f"{self.id} {self.nombre} {self.apellido} {self.email}"


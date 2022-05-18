import os
import django_heroku
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
# BASE_DIR = Path(__file__).resolve().parent.parent
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'z^6u4v_yf_3@ig&1c3hd=7_$)sljg^sz)+)9+d-x^&qt$^xm*y'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["10.0.2.2", "127.0.0.1", "shopisan.com", "shopisan.jh8"]

# Application definition

INSTALLED_APPS = [
    'material',
    'material.admin',
    # 'material.admin.default',
    # 'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'storages',
    'store',
    'user',
    'interaction',
    'file_management',
    'feed',
    'debug_toolbar',
    'rest_framework',
    'rest_framework.authtoken',
    'django_filters',
    'imagekit',
    'web',
    'contact',
    'emails'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.middleware.locale.LocaleMiddleware',
]

# config redirect to https (Prod)
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = True

ROOT_URLCONF = 'shopisan.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, "user/templates")
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'shopisan.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

# local
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'shopisan',
#         'USER': 'root',
#         'PASSWORD': 'root',
#         'HOST': 'localhost',
#         'PORT': '',
#     }
# }

# dev
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'dc73p6lmn8mogi',
#         'USER': 'voivvuejgrtlxv',
#         'PASSWORD': '283d3d1038b83c2d85fc83d00d8d2bcadcbc901d25bc3f38c20540b8816afc09',
#         'HOST': 'ec2-54-74-77-126.eu-west-1.compute.amazonaws.com',
#         'PORT': '5432',
#     }
# }

# prod
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'd18jnerdka5ga5',
        'USER': 'vnqmgrpwnbojes',
        'PASSWORD': 'e94aaae394a19111e3b2d131f34400f27715a13bb3ba66ea0f42da47dc64a3d6',
        'HOST': 'ec2-34-255-134-200.eu-west-1.compute.amazonaws.com',
        'PORT': '5432',
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    'UNICODE_JSON': False,
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        # 'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
}

MATERIAL_ADMIN_SITE = {
    'HEADER': 'Shopisan',  # Admin site header
    'TITLE': 'Shopisan',  # Admin site title
    # 'FAVICON':  'images/FAVICON.png',  # Admin site favicon (path to static should be specified)
    'MAIN_BG_COLOR':  '#FF6565',  # Admin site main color, css color should be specified
    'MAIN_HOVER_COLOR':  '#FF6565',  # Admin site main hover color, css color should be specified
    # 'PROFILE_PICTURE':  'path/to/image',  # Admin site profile picture (path to static should be specified)
    # 'PROFILE_BG':  'images/FAVICON.png',  # Admin site profile background (path to static should be specified)
    # 'LOGIN_LOGO':  'path/to/image',  # Admin site logo on login page (path to static should be specified)
    # 'LOGOUT_BG':  'path/to/image',  # Admin site background on login/logout pages (path to static should be specified)
    'SHOW_THEMES':  True,  #  Show default admin themes button
    # 'TRAY_REVERSE': True,  # Hide object-tools and additional-submit-line by default
    # 'NAVBAR_REVERSE': True,  # Hide side navbar by default
    'SHOW_COUNTS': True,  # Show instances counts for each model
    # 'APP_ICONS': {
    #     'sites': 'send',
    # },
    # 'MODEL_ICONS': {
    #     'site': 'contact_mail',
    # }
}

AWS_ACCESS_KEY_ID = 'AKIA25AXVH3UPFKB636P'
AWS_SECRET_ACCESS_KEY = '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'
AWS_STORAGE_BUCKET_NAME = 'shopisan'
AWS_S3_FILE_OVERWRITE = True
AWS_DEFAULT_ACL = None
# AWS_S3_CUSTOM_DOMAIN = 'cdn.shopisan.com'
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
# STATICFILES_STORAGE = 'storages.backends.s3boto3.S3StaticStorage'  # todo décommenter pour utiliser les statics s3
AWS_S3_REGION_NAME = "eu-west-3"
AWS_S3_SIGNATURE_VERSION = "s3v4"

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

# LANGUAGE_CODE = 'fr-FR'
LANGUAGE_CODE = 'fr'

LANGUAGES = [
    ('fr', 'Francais'), ('en', 'English')
]

# LOCALE_PATHS = (
#     BASE_DIR + '/shopisan/locale', )

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
print(os.path.join(BASE_DIR, 'web/static'))
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'web/static'),
)
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'
# STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'
# WHITENOISE_USE_FINDERS = True
# WHITENOISE_MANIFEST_STRICT = False
# WHITENOISE_ALLOW_ALL_ORIGINS = True

AUTH_USER_MODEL = 'user.user'

LOGIN_URL = '/login/'
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'mail.privateemail.com'
EMAIL_PORT = '465'
EMAIL_HOST_USER = 'info@shopisan.com'
EMAIL_HOST_PASSWORD = 'NinaSimone23'
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
EMAIL_SUBJECT_PREFIX = ""

django_heroku.settings(locals())

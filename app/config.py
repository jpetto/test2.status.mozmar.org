from decouple import config

DEBUG = config('DEBUG', default=True, cast=bool)

GITHUB_USERNAME = config('GITHUB_USERNAME')
GITHUB_PASSWORD = config('GITHUB_PASSWORD')
GITHUB_ORG = config('GITHUB_ORG')
GITHUB_REPOSITORY = config('GITHUB_REPOSITORY')

STATUS_FILE = 'status.yml'

DMS_URL = 'https://api.deadmanssnitch.com/v1/snitches'
DMS_API_KEY = config('DMS_API_KEY')

NEW_RELIC_API_KEY = config('NEW_RELIC_API_KEY')
NEW_RELIC_QUERY_KEY = config('NEW_RELIC_QUERY_KEY')

DMS_PING_URL = config('DMS_PING_URL')

STATUS_MAP = {
    'pending': {
        'name': 'pending',
        'order': 10,
    },
    'healthy': {
        'name': 'healthy',
        'order': 20,
        'global_name': 'All systems healthy',
    },
    'warning': {
        'name': 'warning',
        'order': 30,
        'global_name': 'Some systems are experiencing issues'
    },
    'failed': {
        'name': 'failed',
        'order': 40,
        'global_name': 'Some systems are in trouble'
    }
}

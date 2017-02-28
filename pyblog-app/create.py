import json

def handler(event, context):

    print('received event{}'.format(event))

    body = {
        "message": "Created new article"
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

#!/bin/bash

echo "Running service script check..."

URL_CURL_CHECK="https://phonebookcicd.fly.dev/health"

VAR_RESPONSE=$(curl -s $URL_CURL_CHECK)

echo "Reponse:$VAR_RESPONSE"

if [ $VAR_RESPONSE = ok ]; then
  echo "success"
  exit 0
else
  echo "fail"
  exit 1
fi
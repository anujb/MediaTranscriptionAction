
# Media Transcription Action

This a a sample GitHub action to transcribe video in any issue or pull requests that are opened or commented using [Azure Speech Services](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/)

We download the video either by inspecting an attached video format (mp4, wav, etc). Convert it to pcm16 compatible wavform and then provide a results output value containing the JSON response payload providing a detailed transcription result.

## Usage
Create a ```.github/workflows/transcribe-media.yml``` file:


```yaml
name: 'transcribe-media'
on:
  issues:
    types:
      - opened
      - edited
  issue_comment:
    types:
      - created
      - edited
  pull_request:
    types:
      - opened
      - edited
  pull_request_review_comment:
    types:
      - created
      - edited

jobs:
  transcribe-media:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      #TODO: Finish input and output params
      - name: set URI for 
        if: ${{ github.event.pull_request.body }}
        run: |
          echo "::set-env name=URL_TO_ANALYZE::${{ github.event.pull_request.body }}"

```
## Configuration 

The following inputs are required:


| Input      | Description |
| ----------- | ----------- |
| azure-cognitive-subscription-key      | A valid Azure Cognitive Service key       |
| azure-cognitive-endpoint   | in the Azure portal, navigate to your Cognitive Service resource > Keys and Endpoint > Endpoint (i.e. - https://centralus.api.cognitive.microsoft.com/)         |
| url-to-analyze   | the url or the attachment to analyze         |

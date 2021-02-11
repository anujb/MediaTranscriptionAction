
# Media Transcription Action

This a a sample GitHub action to transcribe video in any issue or pull requests that are opened or commented using [Azure Speech Services](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/)

We download the video either by inspecting an attached video format (mp4, wav, etc). Convert it to pcm16 compatible wavform and then provide a results output value containing the JSON response payload providing a detailed transcription result.

## Usage

## Configuration 

The following inputs are required:


- azure-cognitive-subscription-key: A valid Azure Cognitive Service key
- azure-cognitive-endpoint: in the Azure portal, navigate to your Cognitive Service resource > Keys and Endpoint > Endpoint (i.e. - https://centralus.api.cognitive.microsoft.com/)
- url-to-analyze: the url or the attachment to analyze


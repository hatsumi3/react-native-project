---
date:2023-10
---
# study

## build

- `npx react-native doctor`
  - 必要な環境、ツールインストール済かを確認
  - Errorが0件にならないと実施不可
- OS
  - ios
    - cocoapodsはbrewからインストールした
  - android
    - android-studioのdevice managerでは下位バージョン未対応のため、33.0に落とした
    - android-sdkがlatestだと下位バージョン未対応のため、10.0に落とした
    - avd managerではTiramisu API Level 33のGoogleAPIを選択すること(他もあるが起動しない)

## その他

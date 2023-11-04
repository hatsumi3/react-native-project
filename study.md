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

## emulator

- toggledark mode
  - command + shiht + a
- cache削除
  - ``./node_modules/react-native/scripts/packager.sh --reset-cache1`

## styles

- Layout Props: 全て
- View Style Props: 全て
- Shadow Props: 全て
- Text Style Props: Textのみ
- Image Style Props: Image、ImageBackgroundのみ

### styles 例

ネスト構造が使用できないので、変数名にどのコンポーネントに引き当てているかわかるような命名にする。

```tsx

const textStyles = StyleSheet.create({
  common: {
    fontSize: 20,
  },
  bold: {
    color: 'red',
    fontWeight: 'bold',
  },
});
```

## react-native

### SafeAreaView StatusBar

スマホの上部の時刻、充電情報部分をカットする形でmarginをとってくれる。
背景色などの設定はStatusBar Componentにて行う。


## その他

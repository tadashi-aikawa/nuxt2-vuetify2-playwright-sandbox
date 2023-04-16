# nuxt2-vuetify2-playwright-sandbox

Nuxt2 + Vuetify2 で作成されたページに対して、Playwrightでe2eテストを書く人のためのsandboxプロジェクト。

## ターゲット

- Vue2 + Vuetify2 から Vue3 + Vuetify3 へ移行しなければいけない方
  - e2eテストで移行時のデグレを防ぎたい場合に利用できます

## 使い方

まず起動します。

```console
npm install
npm run dev
```

Playwrightテストを実行します。

```console
npm run test:e2e
```

画面の操作状況を表示したい場合はheadedフラグを指定します。

```console
npm run test:e2e -- --headed
```

テスト作成時はUIモードが便利です。

```console
npm run test:e2e -- --ui
```


## ディレクトリ構成

- `pages`配下はVuetify2のコンポーネントごとにページが切られています
- `tests/pages`配下はVuetify2のコンポーネントごとにhelperとspecが用意されています
  - `*.helper.ts`は[Page Object Model] 
  - `*.spec.ts`はテストケース

## 備考

- 気が向いたらVuetify以外のケースも作成します (多分やらない)

[Page Object Model]: https://playwright.dev/docs/pom

# twitterNewestTweet

Twitterをロードした瞬間に勝手にトップツイートに戻るのが本当に嫌なので、このプラグインを入れたら常に新着ツイートが表に出る（予定）

## Installation

	$ yarn install

## Usage

Run `$ yarn run dev:chrome` and load the `dist`-directory into chrome.

## Entryfiles (bundles)

There are two kinds of entryfiles that create bundles.

1. All ts-files in the root of the `./app/scripts` directory
2. All css-,scss- and less-files in the root of the `./app/styles` directory

## Tasks

### Build

writing now

### pack

writing now

### Version

writing now

## Globals

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. It will be set to `development` unless you use the `--production` option.


**Example:** `./app/background.ts`

```typescript
if(process.env.NODE_ENV === 'development'){
  console.log('We are in development mode!');
}
```







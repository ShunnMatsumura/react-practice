import { useEffect, useLayoutEffect, useState } from "react";

const UPDATE_SYCLE = 1000

const KEY = 'clock_key'

enum Locale {
  ja = 'ja-JP',
  en = 'en-US'
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case 'ja-JP':
      return Locale.ja
    case 'en-US':
      return Locale.en
    default:
      return Locale.en
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.ja)

  useEffect(() => {
    // タイマーのリセット
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_SYCLE)

    return () => {
      clearInterval(timer) // unmount時にタイマーをクリア
    }
  }, []) // 第二引数に空配列を渡すことで、初回のみ実行される

  // ローカルストレージからロケールを取得
  useLayoutEffect(() => {
    const locale = localStorage.getItem(KEY)
    console.log('locale', locale)
    if (locale) {
      setLocale(getLocaleFromString(locale))
    }
  }, [])

  // localeが変更されたらローカルストレージに保存
  useEffect(() => {
    console.log('locale changed')
    localStorage.setItem(KEY, locale)
  }, [locale]) // 第二引数は監視対象の配列

  return (
    <div>
      <p>{timestamp.toLocaleString(locale)}</p>
      <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
        <option value={Locale.ja}>日本語</option>
        <option value={Locale.en}>English</option>
      </select>
    </div>
  )
}
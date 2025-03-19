import { Slot, useRouter, useSegments, useRootNavigationState } from "expo-router"
import { useEffect } from "react"


const isAuthenticated = () => {
  // Check token of AsyncStorage
  return true
}

export default function RootLayout() {
  const segments = useSegments()
  const router = useRouter()
  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState?.key) return
    const inAuthGroup = segments[0] === "auth"
    const inTabsGroup = segments[0] === "tabs"

    const isAuthed = isAuthenticated()

    if (!isAuthed && !inAuthGroup) {
      router.replace("/auth/login")
    } else if (isAuthed && inAuthGroup) {
      router.replace("/tabs/home")
    }
  }, [segments, navigationState?.key])

  return <Slot />
}
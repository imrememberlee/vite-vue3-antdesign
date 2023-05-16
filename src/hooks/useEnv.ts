export function useEnv() {
  const { NODE_ENV, VUE_APP_BASE_URL } = import.meta.env
  return {
    NODE_ENV,
    VUE_APP_BASE_URL,
  }
}

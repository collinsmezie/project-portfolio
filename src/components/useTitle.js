export default function useTitle(location) {
  if (location === '/') {
    return 'collins | Software Developer'
  } else {
    return `collins | ${location[1].toUpperCase()}${location.slice(2)}`
  }
}
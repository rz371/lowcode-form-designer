export function usePermission() {
  function hasPermission(requiredRoles: string[]): boolean {
    const userRoles = JSON.parse(localStorage.getItem('roles') || '[]')
    return requiredRoles.some((role) => userRoles.includes(role))
  }

  return { hasPermission }
}
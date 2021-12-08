export const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI] set error',
  uiRemoveError: '[UI] remove error',

  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',

  notesAddNew: '[Notes] New note',
  // ponerlo activo cuando le das un click
  notesActive: '[Notes] Set active note',
  // Para poner todas las notas
  notesLoad: '[Notes] Load notes',
  notesUpdated: '[Notes] Update note',
  notesFileUrl: '[Notes] Update image url',
  notesDelete: '[Notes] Delete note',
  // borrar toda la informacion de las notas
  notesLogoutCleaning: '[Notes] Logout Cleaning',
}
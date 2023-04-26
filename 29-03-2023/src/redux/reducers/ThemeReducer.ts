

export default function ThemeReducer(state = 'dark',action:{type:String}) {
  switch (action.type) {
    
    case 'DARK_THEME':
        return 'dark';

    case 'LIGHT_THEME':    
        return 'light';

    default:
        return state
  }
}
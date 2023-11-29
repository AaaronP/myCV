import '../styles/LanguagesToggleCss.css'
import { getRelativeLocaleUrl } from 'astro:i18n';

export default function LanguagesToggle () {
    const currentLocation = window.location.pathname

    return (
        <div class="radio-inputs dark:bg-gray-500 dark:text-sky-100 text-slate-500 font-semibold">
            <label class="radio">
                <input type="radio" name="radio" checked={currentLocation.includes('es')}/>
                <a href={currentLocation.includes('en') ? getRelativeLocaleUrl('es') : getRelativeLocaleUrl('en')} class="name">Español</a>
            </label>
            <label class="radio" >
                <input type="radio" name="radio" checked={currentLocation.includes('en')}/>
                <a  href={currentLocation.includes('en') ? getRelativeLocaleUrl('es') : getRelativeLocaleUrl('en')} class="name">Inglés</a>
            </label>
        </div>        
    )
}
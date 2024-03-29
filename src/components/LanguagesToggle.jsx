import '../styles/LanguagesToggleCss.css'
import { getRelativeLocaleUrl } from 'astro:i18n';

export default function LanguagesToggle () {
    const currentLocation = window.location.pathname

    return (
        <div class="radio-inputs dark:bg-gray-500 text-slate-500 dark:text-slate-500 font-semibold">
            <label class="radio">
                <input type="radio" name="radio" checked={currentLocation === '/'}/>
                <a href={currentLocation.includes('en') ? '/' : getRelativeLocaleUrl('en')} class="name">Español</a>
            </label>
            <label class="radio">
                <input type="radio" name="radio" checked={currentLocation.includes('en')}/>
                <a  href={currentLocation.includes('en') ? '/' : getRelativeLocaleUrl('en')} class="name">Inglés</a>
            </label>
        </div>        
    )
}
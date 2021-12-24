import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SpinLoading = () => {
    return (
        <div className="text-3xl h-full p-auto w-auto h-auto text-center text-supernova flex flex-wrap justify-center content-center">
            <FontAwesomeIcon icon={faCircleNotch} className="inline-block animate-spin" />
        </div>
    );
};

export const PlaceHoldStatus = ({ message, Icon }) => {
    return (
        <div className="text-3xl h-full p-auto w-auto h-auto text-center text-supernova flex flex-wrap justify-center content-center">
            <span className="text-lg font-cursive mr-1">{message}</span>
            <Icon className="h-8 w-8 inline animate-bounce" />
        </div>
    )
}
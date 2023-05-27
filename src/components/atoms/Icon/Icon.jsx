import './Icon.scss'

const Icon = ({id, addClass}) => {
    return (
        <i className={'icon ' + { addClass }}>
            {(() => {
                switch (id) {
                    case 'arrow-down':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M29.354,38.225l14.6-14.6-3.433-3.438L29.354,31.362,18.188,20.186l-3.435,3.435Z" transform="translate(3.146 3.295)" fill="#fff"/></g></svg>
                    case 'minus':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M51.219,24.295H7.488V19.435h43.73Z" transform="translate(3.146 10.635)" fill="#fff"/></g></svg>
                    case 'plus':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M42.735,12.148,29.154,25.728,15.573,12.148l-3.425,3.425L25.728,29.154,12.148,42.735l3.425,3.425L29.154,32.579,42.735,46.16l3.425-3.425L32.579,29.154,46.16,15.573Z" transform="translate(32.5 -8.73) rotate(45)" fill="#fff"/></g></svg>
                    case 'github':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M46.756,21.706,25.948.9a3.07,3.07,0,0,0-4.34,0L16.774,5.732l3.637,3.637a4.471,4.471,0,0,1,5.96,5.96l5.957,5.957a4.462,4.462,0,1,1-2.106,2.106l-5.957-5.957a4.672,4.672,0,0,1-.438.182V30.039a4.468,4.468,0,1,1-2.979,0V17.616a4.472,4.472,0,0,1-2.544-6.139L14.668,7.84.9,21.61a3.074,3.074,0,0,0,0,4.343L21.707,46.761a3.07,3.07,0,0,0,4.34,0l20.71-20.71a3.074,3.074,0,0,0,0-4.343Z" transform="translate(8.673 8.671)" fill="#fff"/></g></svg>
                    case 'cross':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M42.735,12.148,29.154,25.728,15.573,12.148l-3.425,3.425L25.728,29.154,12.148,42.735l3.425,3.425L29.154,32.579,42.735,46.16l3.425-3.425L32.579,29.154,46.16,15.573Z" transform="translate(3.946 3.346)" fill="#fff"/></g></svg> 
                    case 'delete':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M40.375,53.166H16.625a4.792,4.792,0,0,1-4.75-4.833V16.916H7.125V12.083h9.5V9.666a4.792,4.792,0,0,1,4.75-4.833h14.25a4.792,4.792,0,0,1,4.75,4.833v2.417h9.5v4.833h-4.75V48.333A4.792,4.792,0,0,1,40.375,53.166Zm-23.75-36.25V48.333h23.75V16.916Zm4.75-7.25v2.417h14.25V9.666Z" transform="translate(4 3.5)" fill="#fff"/></g></svg>
                    case 'search':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M44.357,47.383,30.784,33.569a14.079,14.079,0,0,1-19.14-2.458A14.687,14.687,0,0,1,12.452,11.5a14.071,14.071,0,0,1,19.276-.826A14.678,14.678,0,0,1,34.145,30.15L47.718,43.964,44.36,47.381Zm-21.831-35.3a9.541,9.541,0,0,0-9.3,7.7,9.707,9.707,0,0,0,5.525,10.833,9.4,9.4,0,0,0,11.546-3.306,9.8,9.8,0,0,0-.839-12.175l1.437,1.45-1.62-1.643-.028-.029A9.352,9.352,0,0,0,22.527,12.083Z" transform="translate(4.502 5.184)" fill="#fff"/></g></svg>
                    case 'invisible':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M48.261,51.681l-8.11-8.11A26.177,26.177,0,0,1,29,45.922a26.064,26.064,0,0,1-11.47-2.5,24.347,24.347,0,0,1-7.349-5.515,25.376,25.376,0,0,1-5.106-8.142L4.833,29l.254-.764A26.066,26.066,0,0,1,13.584,17L7.25,10.667l3.415-3.412L51.673,48.263l-3.407,3.417ZM17,20.423A20.721,20.721,0,0,0,9.949,29,20.078,20.078,0,0,0,29,41.088a22.5,22.5,0,0,0,7.46-1.208l-4.35-4.35a7.1,7.1,0,0,1-3.11.725A7.3,7.3,0,0,1,21.75,29a7.1,7.1,0,0,1,.725-3.118ZM47.975,37.729l-3.364-3.362A20.77,20.77,0,0,0,48.05,29,20.059,20.059,0,0,0,29,16.921c-.6,0-1.2.022-1.776.063l-4.265-4.27A28.306,28.306,0,0,1,29,12.088a26.066,26.066,0,0,1,11.469,2.5A24.345,24.345,0,0,1,47.818,20.1a25.376,25.376,0,0,1,5.106,8.132l.242.768-.254.764a25.2,25.2,0,0,1-4.935,7.975Z" transform="translate(3.5 3.032)" fill="#fff"/></g></svg>
                    case 'visible':
                        return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="65" height="65" viewBox="0 0 65 65"><defs><clipPath id="b"><rect width="65" height="65"/></clipPath></defs><g id="a" clipPath="url(#b)"><path d="M29,45.916a26.061,26.061,0,0,1-11.47-2.5A24.35,24.35,0,0,1,10.181,37.9a25.59,25.59,0,0,1-5.106-8.137L4.833,29l.254-.764a25.763,25.763,0,0,1,5.1-8.137,24.343,24.343,0,0,1,7.347-5.515A26.063,26.063,0,0,1,29,12.083a26.066,26.066,0,0,1,11.469,2.5A24.344,24.344,0,0,1,47.818,20.1a25.375,25.375,0,0,1,5.106,8.137l.242.764-.254.764A25.189,25.189,0,0,1,29,45.916Zm0-29A20.078,20.078,0,0,0,9.949,29,20.075,20.075,0,0,0,29,41.083,20.08,20.08,0,0,0,48.05,29,20.058,20.058,0,0,0,29,16.916ZM29,36.25a7.3,7.3,0,1,1,5.111-2.136A7.192,7.192,0,0,1,29,36.25Z" transform="translate(3.5 3.5)" fill="#fff"/></g></svg>
                    default:
                        return null
                }
            })()}  
        </i>
    )
}

export default Icon
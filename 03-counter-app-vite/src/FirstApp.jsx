import PropTypes from 'prop-types'

/* const getSaludo = () => {
    const saludo = 'Hi, I\'m Lynneth Pereira'
    return (
        saludo
    )
} */

export const FirstApp = ({title, name, subTitle}) => {
    return (
        <>
            {/* <h1> {getSaludo()} </h1> */}
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Naty',
    // title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
}
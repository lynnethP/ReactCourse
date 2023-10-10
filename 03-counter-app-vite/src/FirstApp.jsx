import PropTypes from 'prop-types'

/* const getSaludo = () => {
    const saludo = 'Hi, I\'m Lynneth Pereira'
    return (
        saludo
    )
} */

export const FirstApp = ({title, subTitle}) => {
    const name = 'Naty'
    return (
        <>
            {/* <h1> {getSaludo()} </h1> */}
            <h1>{title} - {name}</h1>
            <p>{subTitle}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

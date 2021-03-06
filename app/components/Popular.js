import React from 'react'
import PropTypes from 'prop-types'

// start  | create component that renders nav list

function LanguagesNav({selected, onUpdateLanguage}) {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    
    /* maps through items in language list and creates list items that are buttons for each */
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button 
          className='btn-clear nav-link'
          style={
            language === selected
            ? {color: 'blue'}
            : null
          }
          onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  )

}

// end  | create component that renders nav list

class Popular extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

    updateLanguage(selectedLanguage){
      this.setState({
        selectedLanguage
      })
    }

  render() {
    const { selectedLanguage } = this.state

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage= {this.updateLanguage} />
      </React.Fragment>
    )

  }
}

export default Popular

Popular.propTypes = {
  name: PropTypes.string.isRequired
}
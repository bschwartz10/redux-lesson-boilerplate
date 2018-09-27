import { connect } from 'react-redux'
import { setFilter } from '../actions'
import FilterMenu from '../components/FilterMenu'

const mapStateToProps = (state) => {
  return {
    filter: state.filterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (filter) => {
      dispatch(setFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu)

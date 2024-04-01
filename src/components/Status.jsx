import PropTypes from 'prop-types'

export default function Status({status}){
    return<div className='status'>{status}</div>
}

Status.propTypes = {
    status: PropTypes.string.isRequired,
};
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class movieInfo extends Component {
    
    // Hvis vi tenker på movie-infoen, så er det egentlig én spesifikk movie og dens verdier/attributter
    // jeg vil displaye. Men dette vil jeg også at skal kalles ved en onClick på filmelementet, så jeg
    // vet ikke hvordan jeg kobler sammen redux med onclick.
    createListItems() {
        return this.props.movie.map((movie) => { // hmm, her klikker det litt. Vet ikke hva som er feil.
                                                 // movie er jo definert lengre nede, men jeg vet ikke egentlig
                                                 // hva det er {movie: any;} er.
            return (
                <li key={movie.id}>{movie.title} {movie.year}</li>
            );
        });
    }
    
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

// Denne funksjonen tar enn state (en bit av store) og sender
// det til komponenten din som en props
function mapStateToProps(state: { movie: any; }) {
    return {
        movie: state.movie
    };
}

// Når vi connecter movieInfo og mapStateToProps sånn som dette så
// sørger vi for at movieInfo vet om mapStateToProps
export default connect(mapStateToProps)(movieInfo);
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from '../collection/collection.component';

import {
	firestore,
	convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    
		this.unsubscribeFromSnapShot = collectionRef.get().then((snapshot) => {
		  const collectionsMap = convertCollectionSnapshotToMap(snapshot);
		  updateCollections(collectionsMap);
		  this.setState({loading: false});
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

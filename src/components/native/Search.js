import React, { Component } from 'react'
import { Text, Button, TextInput, TouchableOpacity, LayoutAnimation, View, Dimensions, StyleSheet, Keyboard } from 'react-native'

class SearchComponent extends Component {
	constructor(props) {
		super(props)
	}

	componentWillUpdate() {
		LayoutAnimation.linear()
	}

	componentDidUpdate() {
		if (this.props.is_searching) {
			this.refs.search.focus()
		}
	}

	cancelButton = () => {
		this.props.Searching(isSearching = false)
		Keyboard.dismiss()
		this.props.onSearchChange('')
	}

	showCancelButton = () => {
		if (this.props.is_searching) {
			return (
				<Button
				  title='Cancel'
				  fontSize={14}
				  onPress={this.cancelButton.bind(this)}
				/>
			)
		}
	}

	onSearchTextChange = (text) => {
		this.props.onSearchChange(text)
	}

	render (){
		return (
			<View style={styles.SearchContainer}>
			  <TouchableOpacity
			    style={{ elevation: 4 }}
			  >
			    <View
				   ref='touchable_search'
				   style={styles.touchableSearch}>

				  <View style={[styles.insideTouchableView, this.props.is_searching]}>
					<TextInput
					  ref='search'
						autoCorrect={false}
            multiline={true}
						placeholderTextColor='white'
						value={this.props.search_text}
						onChangeText={(text) => this.onSearchTextChange(text)}
						keyboardType={'web-search'}
						placeholder='Search'
						style={[styles.customSearchTextInputStyle,]}
					/>
				  </View>
				</View>
			  </TouchableOpacity>
			  {this.showCancelButton()}

			</View>
		);
	}
};

const styles = StyleSheet.create({
	SearchContainer: {
		padding: 5,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
	},
	touchableSearch: {
		borderRadius: 4,
		padding: 7,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	insideTouchableView: {
		width: 200,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	customSearchTextInputStyle:{
		height: 24,
		alignSelf: 'stretch',
		width: 200,
		fontSize: 14,
		marginLeft: 7
	},
})

export default SearchComponent

var DataSourceTree = function(options) {
	this._data 	= options.data;
	this._delay = options.delay;
}

DataSourceTree.prototype.data = function(options, callback) {
	var self = this;
	var $data = null;

	if(!("name" in options) && !("type" in options)){
		$data = this._data;//the root tree
		callback({ data: $data });
		return;
	}
	else if("type" in options && options.type == "folder") {
		if("additionalParameters" in options && "children" in options.additionalParameters)
			$data = options.additionalParameters.children;
		else $data = {}//no data
	}
	
	if($data != null)//this setTimeout is only for mimicking some random delay
		setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

	//we have used static data here
	//but you can retrieve your data dynamically from a server using ajax call
	//checkout examples/treeview.html and examples/treeview.js for more info
};

var tree_data = {
	'for-sale' : {name: 'For Sale', type: 'folder'}	,
	'vehicles' : {name: 'Vehicles', type: 'folder'}	,
	'rentals' : {name: 'Rentals', type: 'folder'}	,
	'real-estate' : {name: 'Real Estate', type: 'folder'}	,
	'pets' : {name: 'Pets', type: 'folder'}	,
	'tickets' : {name: 'Tickets', type: 'item'}	,
	'services' : {name: 'Services', type: 'item'}	,
	'personals' : {name: 'Personals', type: 'item'}
}
tree_data['for-sale']['additionalParameters'] = {
	'children' : {
		'appliances' : {name: 'Appliances', type: 'item'},
		'arts-crafts' : {name: 'Arts & Crafts', type: 'item'},
		'clothing' : {name: 'Clothing', type: 'item'},
		'computers' : {name: 'Computers', type: 'item'},
		'jewelry' : {name: 'Jewelry', type: 'item'},
		'office-business' : {name: 'Office & Business', type: 'item'},
		'sports-fitness' : {name: 'Sports & Fitness', type: 'item'}
	}
}
tree_data['vehicles']['additionalParameters'] = {
	'children' : {
		'cars' : {name: 'Cars', type: 'folder'},
		'motorcycles' : {name: 'Motorcycles', type: 'item'},
		'boats' : {name: 'Boats', type: 'item'}
	}
}
tree_data['vehicles']['additionalParameters']['children']['cars']['additionalParameters'] = {
	'children' : {
		'classics' : {name: 'Classics', type: 'item'},
		'convertibles' : {name: 'Convertibles', type: 'item'},
		'coupes' : {name: 'Coupes', type: 'item'},
		'hatchbacks' : {name: 'Hatchbacks', type: 'item'},
		'hybrids' : {name: 'Hybrids', type: 'item'},
		'suvs' : {name: 'SUVs', type: 'item'},
		'sedans' : {name: 'Sedans', type: 'item'},
		'trucks' : {name: 'Trucks', type: 'item'}
	}
}

tree_data['rentals']['additionalParameters'] = {
	'children' : {
		'apartments-rentals' : {name: 'Apartments', type: 'item'},
		'office-space-rentals' : {name: 'Office Space', type: 'item'},
		'vacation-rentals' : {name: 'Vacation Rentals', type: 'item'}
	}
}
tree_data['real-estate']['additionalParameters'] = {
	'children' : {
		'apartments' : {name: 'Apartments', type: 'item'},
		'villas' : {name: 'Villas', type: 'item'},
		'plots' : {name: 'Plots', type: 'item'}
	}
}
tree_data['pets']['additionalParameters'] = {
	'children' : {
		'cats' : {name: 'Cats', type: 'item'},
		'dogs' : {name: 'Dogs', type: 'item'},
		'horses' : {name: 'Horses', type: 'item'},
		'reptiles' : {name: 'Reptiles', type: 'item'}
	}
}

var treeDataSource = new DataSourceTree({data: tree_data});









var ace_icon = ace.vars['icon'];
//class="'+ace_icon+' fa fa-file-text grey"
//becomes
//class="ace-icon fa fa-file-text grey"
var tree_data_2 = {
    'RDF1+Mir Meta Member': { name: 'RDF1+Mir Meta Member', type: 'folder', 'icon-class': 'red' },
	'Cache Vault': { name: 'Cache Vault', type: 'folder', 'icon-class': 'orange' },
	'video' : {name: 'Video', type: 'folder', 'icon-class':'blue'}	,
	'documents': { name: '2-Way Mir Meta Member', type: 'folder', 'icon-class': 'green' },
	'backup': { name: 'RAID5 7+1 Meta Member', type: 'folder' }
	
}
tree_data_2['Cache Vault']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> song1.ogg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> song2.ogg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> song3.ogg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> song4.ogg', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-music blue"></i> song5.ogg', type: 'item'}
	]
}
tree_data_2['video']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie1.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie2.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie3.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie4.avi', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-film blue"></i> movie5.avi', type: 'item'}
	]
}
tree_data_2['RDF1+Mir Meta Member']['additionalParameters'] = {
	'children' : {
		'wallpapers' : {name: '[0-100]', type: 'folder', 'icon-class':'pink'},
		'camera': { name: '[100-200]', type: 'folder', 'icon-class': 'pink' }
	}
}
tree_data_2['RDF1+Mir Meta Member']['additionalParameters']['children']['wallpapers']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> 001', type: 'item'},
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 002', type: 'item' },
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 003', type: 'item' },
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 004', type: 'item' }
	]
}
tree_data_2['RDF1+Mir Meta Member']['additionalParameters']['children']['camera']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> 100', type: 'item'},
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 101', type: 'item' },
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 102', type: 'item' },
		{name: '<i class="'+ace_icon+' fa fa-picture-o green"></i> 103', type: 'item'},
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 104', type: 'item' },
		{ name: '<i class="' + ace_icon + ' fa fa-picture-o green"></i> 105', type: 'item' }
	]
}


tree_data_2['documents']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-file-text red"></i> document1.pdf', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> document2.doc', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> document3.doc', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text red"></i> document4.pdf', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-file-text grey"></i> document5.doc', type: 'item'}
	]
}

tree_data_2['backup']['additionalParameters'] = {
	'children' : [
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> backup1.zip', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> backup2.zip', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> backup3.zip', type: 'item'},
		{name: '<i class="'+ace_icon+' fa fa-archive brown"></i> backup4.zip', type: 'item'}
	]
}
var treeDataSource2 = new DataSourceTree({data: tree_data_2});
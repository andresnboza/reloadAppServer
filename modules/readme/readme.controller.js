import asyncHandler from 'express-async-handler';
import Readme from './readme.model.js';

const getAllUploads = asyncHandler(async (req, res) => {
	const items = await Readme.find({});

	console.log('items', items);

	items.map((item) => {
		console.log('item', item);
	});

	res.send({ data: items });
});

const saveUpload = asyncHandler(async (req, res) => {
	let item = await Readme.create({
		createdAt: Date.now(),
		file_name: 'test',
		encoded: {
			0: 'Hello',
			1: 'world',
		},
	});

	res.send({ data: item });
});

export { getAllUploads, saveUpload };

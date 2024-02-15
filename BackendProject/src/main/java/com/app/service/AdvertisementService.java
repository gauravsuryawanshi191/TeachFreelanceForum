package com.app.service;

import java.util.List;

import com.app.pojos.Advertisement;

public interface AdvertisementService {

	Advertisement addNewAdvertisement(Advertisement transientAdvertisement);

	List<Advertisement> getAllAdvertisement();

	Advertisement getAdvertisementName(String skill);

	String removeAdvertisementById(Long id);

	Advertisement fetchAdvertisementDetails(Long id);

	Advertisement addOrUpdateFreelancerDetails(Advertisement transientAdvertisement);

	List<Advertisement> getDetail(String advertisementDescription);
	
	
}

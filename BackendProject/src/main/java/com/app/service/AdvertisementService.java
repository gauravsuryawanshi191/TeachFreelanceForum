package com.app.service;

import java.util.List;

import com.app.pojos.Advertisement;

public interface AdvertisementService {

	Advertisement addNewAdvertisement(Long instituteId,Advertisement transientAdvertisement);

	List<Advertisement> getAllAdvertisement();
	
	//for edit advertisement fetch data of the same
	Advertisement fetchAdvertisementDetails(Long id);
	
	List<Advertisement> fetchInstituteAdvertisements(Long instituteId);

	Advertisement getAdvertisementName(String skill);

	String removeAdvertisementById(Long id);

	Advertisement addOrUpdateFreelancerDetails(Advertisement transientAdvertisement);

	List<Advertisement> getDetail(String advertisementDescription);

	Advertisement updateAdvertisementDetails(Long instituteId, Long advertisementId, Advertisement advertisement);
	
}

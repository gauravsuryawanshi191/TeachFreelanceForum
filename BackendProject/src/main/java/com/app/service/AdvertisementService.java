package com.app.service;

import java.util.List;

import com.app.dto.AdvertisementDTO;

public interface AdvertisementService {

	AdvertisementDTO addNewAdvertisement(Long instituteId, AdvertisementDTO transientAdvertisementDto);

	List<AdvertisementDTO> getAllAdvertisement();

	// for edit advertisement fetch data of the same
	AdvertisementDTO fetchAdvertisementDetails(Long id);

	List<AdvertisementDTO> fetchInstituteAdvertisements(Long instituteId);

	AdvertisementDTO getAdvertisementName(String skill);

	String removeAdvertisementById(Long id);

	AdvertisementDTO addOrUpdateFreelancerDetails(AdvertisementDTO transientAdvertisementDto);

	List<AdvertisementDTO> getDetail(String advertisementDescription);

	AdvertisementDTO updateAdvertisementDetails(Long instituteId, Long advertisementId, AdvertisementDTO advertisement);

}

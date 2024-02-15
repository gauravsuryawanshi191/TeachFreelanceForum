package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdvertisementRepository;
import com.app.pojos.Advertisement;

@Service
@Transactional

public class AdvertisementServiceImpl implements AdvertisementService {
	@Autowired
	private AdvertisementRepository newAdvertisement;

	@Override
	public Advertisement addNewAdvertisement(Advertisement transientAdvertisement) {
		return newAdvertisement.save(transientAdvertisement);
	}

	@Override
	public List<Advertisement> getAllAdvertisement() {
		return newAdvertisement.findAll();
	}

	@Override
	public Advertisement getAdvertisementName(String occupationTitle) {
		// TODO Auto-generated method stub
		Advertisement advertisement = newAdvertisement.findByOccupationTitle(occupationTitle)
				.orElseThrow(() -> new RuntimeException("No Advertisement found skill " + occupationTitle));

		return advertisement;
	}

	@Override
	public String removeAdvertisementById(Long id) {

		newAdvertisement.deleteById(id);

		return "ok deleted";

	}

	@Override
	public Advertisement fetchAdvertisementDetails(Long id) {
		return newAdvertisement.findById(id).orElseThrow(() -> new RuntimeException("No User found  " + id));

	}

	@Override
	public Advertisement addOrUpdateFreelancerDetails(Advertisement transientAdvertisement) {
		return newAdvertisement.save(transientAdvertisement);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Advertisement> getDetail(String advertisementDiscription) {
		return (List<Advertisement>) newAdvertisement.advertisementDescription(advertisementDiscription)
				.orElseThrow(() -> new RuntimeException("No User found  " + advertisementDiscription));
	}

}

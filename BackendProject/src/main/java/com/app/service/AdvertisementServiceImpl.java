package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdvertisementRepository;
import com.app.dao.InstituteRepository;
import com.app.pojos.Advertisement;
import com.app.pojos.Institute;

@Service
@Transactional

public class AdvertisementServiceImpl implements AdvertisementService {
	@Autowired
	private AdvertisementRepository advertisementRepo;
	
	@Autowired
	private InstituteRepository instituteRepo;

	@Override
	public Advertisement addNewAdvertisement(Long instituteId, Advertisement transientAdvertisement) {
		Institute institute = instituteRepo.findById(instituteId).orElseThrow(() -> new RuntimeException("No Institute found  " + instituteId));
		transientAdvertisement.setInstituteRef(institute);
		transientAdvertisement.setPostingDate(LocalDate.now());
		return advertisementRepo.save(transientAdvertisement);
	}

	@Override
	public List<Advertisement> getAllAdvertisement() {
		return advertisementRepo.findAll();
	}

	@Override
	public List<Advertisement> fetchInstituteAdvertisements(Long instituteId) {
		return advertisementRepo.findByInstituteId(instituteId).orElseThrow(() -> new RuntimeException("No Advertisement posted yet"));
	}
	
	@Override
	public Advertisement getAdvertisementName(String occupationTitle) {
		Advertisement advertisement = advertisementRepo.findByOccupationTitle(occupationTitle)
				.orElseThrow(() -> new RuntimeException("No Advertisement found with title " + occupationTitle));

		return advertisement;
	}

	@Override
	public Advertisement updateAdvertisementDetails(Long instituteId, Long advertisementId, Advertisement advertisement) {
		advertisementRepo.findById(advertisementId).orElseThrow(() -> new RuntimeException("No such advertisement exists"));
		System.out.println("Advertisement found");
		Institute instituteRef = instituteRepo.getById(instituteId);
		Advertisement adv = new Advertisement();
		adv.setOccupationTitle(advertisement.getOccupationTitle());
		adv.setSalary(advertisement.getSalary());
		adv.setDescription(advertisement.getDescription());
		adv.setDurationOfEmployment(advertisement.getDurationOfEmployment());
		adv.setPreferedGender(advertisement.getPreferedGender());
		adv.setSkill(advertisement.getSkill());
		adv.setWorkExperienceRequired(advertisement.getWorkExperienceRequired());
		adv.setVacancyAvailable(advertisement.getVacancyAvailable());
		adv.setPostingDate(LocalDate.now());
		adv.setId(advertisementId);
		adv.setInstituteRef(instituteRef);
		return advertisementRepo.save(adv);
	}
	
	@Override
	public String removeAdvertisementById(Long id) {
		advertisementRepo.deleteById(id);
		return "ok deleted";
	}

	@Override
	public Advertisement fetchAdvertisementDetails(Long id) {
		return advertisementRepo.findById(id).orElseThrow(() -> new RuntimeException("No Advertisement found  " + id));
	}

	@Override
	public Advertisement addOrUpdateFreelancerDetails(Advertisement transientAdvertisement) {
		return advertisementRepo.save(transientAdvertisement);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Advertisement> getDetail(String advertisementDiscription) {
		return (List<Advertisement>) advertisementRepo.advertisementDescription(advertisementDiscription)
				.orElseThrow(() -> new RuntimeException("No User found  " + advertisementDiscription));
	}

}

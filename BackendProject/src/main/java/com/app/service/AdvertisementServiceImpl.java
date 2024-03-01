package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdvertisementRepository;
import com.app.dao.InstituteRepository;
import com.app.dto.AdvertisementDTO;
import com.app.dto.InstituteDTO;
import com.app.pojos.Advertisement;
import com.app.pojos.Institute;

@Service
@Transactional

public class AdvertisementServiceImpl implements AdvertisementService {
	@Autowired
	private AdvertisementRepository advertisementRepo;

	@Autowired
	private InstituteRepository instituteRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public AdvertisementDTO addNewAdvertisement(Long instituteId, AdvertisementDTO transientAdvertisementDto) {
		InstituteDTO institute = mapper.map(instituteRepo.findById(instituteId)
				.orElseThrow(() -> new RuntimeException("No Institute found  " + instituteId)), InstituteDTO.class);
		transientAdvertisementDto.setInstituteRef(institute);
		transientAdvertisementDto.setPostingDate(LocalDate.now());
		Advertisement advertisement = mapper.map(transientAdvertisementDto, Advertisement.class);
		return mapper.map(advertisementRepo.save(advertisement), AdvertisementDTO.class);
	}

	@Override
	public List<AdvertisementDTO> getAllAdvertisement() {
		return advertisementRepo.findAll().stream().map(f -> mapper.map(f, AdvertisementDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<AdvertisementDTO> fetchInstituteAdvertisements(Long instituteId) {
		return advertisementRepo.findByInstituteId(instituteId).stream()
				.map(inst -> mapper.map(inst, AdvertisementDTO.class)).collect(Collectors.toList());
	}

	@Override
	public AdvertisementDTO getAdvertisementName(String occupationTitle) {
		AdvertisementDTO advertisementDto = mapper.map(advertisementRepo.findByOccupationTitle(occupationTitle)
				.orElseThrow(() -> new RuntimeException("No Advertisement found with title " + occupationTitle)),
				AdvertisementDTO.class);

		return advertisementDto;
	}

	@Override
	public AdvertisementDTO updateAdvertisementDetails(Long instituteId, Long advertisementId,
			AdvertisementDTO advertisementDto) {
		advertisementRepo.findById(advertisementId)
				.orElseThrow(() -> new RuntimeException("No such advertisement exists"));
		System.out.println("Advertisement found");
		Institute instituteRef = instituteRepo.getById(instituteId);
		// Advertisement adv = new Advertisement();
		Advertisement advertisement = mapper.map(advertisementDto, Advertisement.class);
		// adv.setOccupationTitle(advertisementDto.getOccupationTitle());
		// adv.setSalary(advertisementDto.getSalary());
		// adv.setDescription(advertisementDto.getDescription());
		// adv.setDurationOfEmployment(advertisementDto.getDurationOfEmployment());
		// adv.setPreferedGender(advertisementDto.getPreferedGender());
		// adv.setSkill(advertisementDto.getSkill());
		// adv.setWorkExperienceRequired(advertisementDto.getWorkExperienceRequired());
		// adv.setVacancyAvailable(advertisementDto.getVacancyAvailable());
		advertisement.setPostingDate(LocalDate.now());
		advertisement.setId(advertisementId);
		advertisement.setInstituteRef(instituteRef);
		System.out.println(advertisement);
		return mapper.map(advertisementRepo.save(advertisement), AdvertisementDTO.class);
	}

	@Override
	public String removeAdvertisementById(Long id) {
		advertisementRepo.deleteById(id);
		return "ok deleted";
	}

	@Override
	public AdvertisementDTO fetchAdvertisementDetails(Long id) {
		return mapper.map(
				advertisementRepo.findById(id).orElseThrow(() -> new RuntimeException("No Advertisement found  " + id)),
				AdvertisementDTO.class);
	}

	@Override
	public AdvertisementDTO addOrUpdateFreelancerDetails(AdvertisementDTO transientAdvertisementDto) {
		Advertisement advertisement = mapper.map(transientAdvertisementDto, Advertisement.class);
		return mapper.map(advertisementRepo.save(advertisement), AdvertisementDTO.class);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<AdvertisementDTO> getDetail(String advertisementDiscription) {
		return (List<AdvertisementDTO>) advertisementRepo.advertisementDescription(advertisementDiscription)
				.orElseThrow(() -> new RuntimeException("No User found  " + advertisementDiscription));
	}

}

package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdvertisementRepository;
import com.app.dao.FreelancerRepository;
import com.app.dao.InstituteRepository;
import com.app.dao.InstituteResponseRepository;
import com.app.dto.FreelancerDTO;
import com.app.dto.InstituteDTO;
import com.app.dto.InstituteUpdateDTO;
import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;

@Service
@Transactional
public class InstituteServiceImpl implements InstituteService {

	@Autowired
	private InstituteRepository instituteRepo;

	@Autowired
	private InstituteResponseRepository feedback;

	@Autowired
	private AdvertisementRepository advertisementRepo;

	@Autowired
	private FreelancerRepository freeRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<FreelancerDTO> getDetails(String applyingForJob) {
		return instituteRepo.applyingForTheJob(applyingForJob).stream()
				.map(freelancer -> mapper.map(freelancer, FreelancerDTO.class)).collect(Collectors.toList());
	}

	@Override
	public InstituteDTO addInstitute(InstituteDTO instituteDto) {
		Institute institute = mapper.map(instituteDto, Institute.class);
		return mapper.map(instituteRepo.save(institute), InstituteDTO.class);
	}

	@Override
	public InstituteDTO authenticateInstitute(String em, String pass) {
		instituteRepo.findByInstituteEmail(em).orElseThrow(() -> new RuntimeException("Email id is not registered"));
		System.out.println("Email verified");
		Institute institute = instituteRepo.findByInstitutePassword(pass)
				.orElseThrow(() -> new RuntimeException("Institute login failed : Invalid Credentials"));
		return mapper.map(institute, InstituteDTO.class);
	}

	@Override
	public List<InstituteDTO> getAllInstitutes() {
		List<InstituteDTO> instdto = new ArrayList<>();
		instdto = instituteRepo.findAll().stream().map(inst -> mapper.map(inst, InstituteDTO.class))
				.collect(Collectors.toList());
		for (InstituteDTO inst : instdto) {
			System.out.println(inst);
		}
		return instdto;
	}

	@Override
	public InstituteDTO getInstituteDetails(String email) {
		Institute institute = instituteRepo.findByInstituteEmail(email)
				.orElseThrow(() -> new RuntimeException("Email id not registered"));
		System.out.println(institute);
		return mapper.map(institute, InstituteDTO.class);
	}

	@Override
	public String removeInstituteById(Long id) {
		// delete my advertisements
		advertisementRepo.deleteByInstituteId(id);
		instituteRepo.deleteById(id);
		return "ok deleted";
	}

	@Override
	public InstituteDTO authenticateEmail(String email) {
		return mapper.map(
				instituteRepo.findByInstituteEmail(email).orElseThrow(() -> new RuntimeException("Invalid Email")),
				InstituteDTO.class);
	}

	@Override
	public Integer updatePasswordWithEmail(String pass, String email) {
		return instituteRepo.updatePassword(pass, email);
	}

	@Override
	public InstituteResponse addResponse(InstituteResponse s) {
		return feedback.save(s);
	}

	@Override
	public Integer updateInstituteStatus(Long id, String status) {
		return instituteRepo.updateInstituteStatus(id, status);
	}

	@Override
	public InstituteResponse findByFreelancerEmail(String freelancerEmail) {
		return feedback.findByFreelancerEmail(freelancerEmail)
				.orElseThrow(() -> new RuntimeException("Invalid Freelancer Email"));
	}

	@Override
	public Integer updateInstitute(InstituteUpdateDTO updatedInstituteDto) {
		Institute updatedInstitute = mapper.map(updatedInstituteDto, Institute.class);
		System.out.println(updatedInstitute);
		return instituteRepo.updateInstitute(updatedInstitute.getInstituteName(),
				updatedInstitute.getInstituteMission(), updatedInstitute.getInstituteEmail());
	}

	@Override
	public List<FreelancerDTO> getAllAplicant(Long instiId) {
		return freeRepo.allApplications(instiId).stream().map(f -> mapper.map(f, FreelancerDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public InstituteDTO getInstituteById(Long id) {
		return mapper.map(instituteRepo.findById(id).orElseThrow(() -> new RuntimeException("Invalid ID")),
				InstituteDTO.class);
	}

}
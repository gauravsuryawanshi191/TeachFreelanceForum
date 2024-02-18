package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Advertisement;
import com.app.service.AdvertisementService;

@CrossOrigin(origins = "*")
//http://localhost:3000
@RestController
@RequestMapping("/api/Advertisement")
public class AdvertisementController {

	@Autowired
	private AdvertisementService advertisementService;

	public AdvertisementController() {
		System.out.println("in ctor of " + getClass());
	}

	@PostMapping("/{instituteId}")
	public Advertisement addAdvertisementDetails(@PathVariable Long instituteId, @RequestBody Advertisement advertisement) {
		System.out.println("in add emp " + advertisement);
		return advertisementService.addNewAdvertisement(instituteId, advertisement);
	}
	
	//for institute
	@GetMapping("/{instituteId}")
	public List<Advertisement> getInstituteAdvertisements(@PathVariable Long instituteId) {
		System.out.println("in get Advertisement of specific institute");
		return advertisementService.fetchInstituteAdvertisements(instituteId);
	}

	//for freelancer
	@GetMapping
	public List<Advertisement> getAllAdvertisementDetails() {
		System.out.println("in get all Advertisements");
		return advertisementService.getAllAdvertisement();
	}
	
	//get advertisement for update operation
	@GetMapping("/get/{advertisementId}")
	public Advertisement getAdvertisementDetails(@PathVariable Long advertisementId) {
		System.out.println("in get specific Advertisement details");
		return advertisementService.fetchAdvertisementDetails(advertisementId);
	}

//	@GetMapping("/{skill}")
//	public Advertisement getAdvertisementDetailsBySkill(@PathVariable String skill) {
//		System.out.println("in skill methods");
//		return advertisementService.getAdvertisementName(skill);
//	}

	@DeleteMapping("/{advertisementId}")
	public String deleteAdvertisementById(@PathVariable Long advertisementId) {
		advertisementService.removeAdvertisementById(advertisementId);
		return "deleted";
	}

	@PutMapping("/{instituteId}/{advertisementId}")
	public ResponseEntity<?> editAdvertisementDetails(@PathVariable Long instituteId,@PathVariable Long advertisementId, @RequestBody Advertisement advertisement) {
		System.out.println("in update Advertisement " + instituteId + advertisementId);
		// try {
		// invoke service layer's method
		return new ResponseEntity<>(advertisementService.updateAdvertisementDetails(instituteId, advertisementId, advertisement), HttpStatus.OK);
//		} catch (RuntimeException e) {
//			System.out.println("err in get emp dtls " + e);
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
//		}
	}

	@PutMapping("/put")
	public Advertisement updateAdvertisementDetails(@RequestBody Advertisement e) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add Advertisement " + e);
		return advertisementService.addOrUpdateFreelancerDetails(e);
	}

//	@GetMapping("/get/{AdvertisementDescription}")
//	public List<Advertisement> getApplyDetails(@PathVariable String AdvertisementDiscription) {
//		System.out.println("in applicant details methods");
//		return advertisementService.getDetail(AdvertisementDiscription);
//	}
}

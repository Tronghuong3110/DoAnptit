package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
public class Result {

    private Long id;
    private String duration;
    private String winTeam;
    private String looseTeam;
    private String pointFinal;
}

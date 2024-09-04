package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "result")
@Entity
public class Result {

    @Id
    private Long id;
    private String duration;
    private String winTeam;
    private String looseTeam;
    private String pointFinal;
}

package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data

public class LeagueTable {
    private Long id;
    private String name;
    private LocalDateTime createAt;

}
